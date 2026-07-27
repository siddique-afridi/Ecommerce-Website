import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import { toast } from 'react-toastify'

const statusStyles = {
  'Order Placed': 'bg-info',
  'Packing': 'bg-warning',
  'Shipped': 'bg-accent',
  'Out for delivery': 'bg-primary',
  'Delivered': 'bg-success',
}

const StatusDot = ({ status }) => (
  <span className={`min-w-2 h-2 rounded-full ${statusStyles[status] || 'bg-muted-foreground'}`} />
)

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrderData = async () => {
    try {
      if (!token) {
        setLoading(false);
        return null;
      }

      setLoading(true);
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;

            allOrdersItem.push(item);
          })
        })

        setOrderData(allOrdersItem.reverse())
      }

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token],loadOrderData)

  return (
    <div className='max-w-container mx-auto px-6 lg:px-10 pt-12 pb-20 font-sans border-t border-border'>
      <div className='mb-8'>
        <Title text1={'MY'} text2={'ORDERS'} />
        {!loading && orderData.length > 0 && (
          <p className='text-[13px] text-muted mt-1'>
            {orderData.length} {orderData.length === 1 ? 'item' : 'items'} across your orders
          </p>
        )}
      </div>

      {loading ? (
        <div className='flex flex-col gap-3'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='h-24 border border-border bg-surface animate-pulse' />
          ))}
        </div>
      ) : orderData.length === 0 ? (
        <div className='border border-border bg-surface py-20 text-center'>
          <p className='font-display text-xl text-foreground mb-2'>No orders yet</p>
          <p className='text-sm text-muted'>Once you place an order, you'll be able to track it here.</p>
        </div>
      ) : (
        <div className='flex flex-col'>
          {orderData.map((item, i) => (
            <div
              key={i}
              className='py-6 border-b border-border first:border-t text-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-5'
            >
              <div className='flex items-start text-sm gap-5'>
                <div className='w-16 sm:w-20 aspect-square shrink-0 overflow-hidden bg-paper-200 border border-border'>
                  <img className='w-full h-full object-cover' src={item.image[0]} alt={item.name} />
                </div>
                <div>
                  <p className='sm:text-base font-medium text-foreground'>{item.name}</p>
                  <div className='flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[13px] text-muted'>
                    <p>{currency}{item.price}</p>
                    <span className='text-border'>·</span>
                    <p>Qty: {item.quantity}</p>
                    <span className='text-border'>·</span>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-2 text-[13px] text-muted'>
                    Placed on <span className='text-muted-foreground'>{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className='mt-1 text-[13px] text-muted'>
                    Payment <span className='text-muted-foreground'>{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              <div className='md:w-auto flex items-center justify-between md:gap-10'>
                <div className='flex items-center gap-2'>
                  <StatusDot status={item.status} />
                  <p className='text-sm md:text-base text-foreground'>{item.status}</p>
                </div>
                <button
                  onClick={loadOrderData}
                  className='border border-border px-4 py-2 text-[13px] tracking-[0.05em] uppercase text-foreground hover:border-accent hover:text-accent transition-colors'
                >
                  Track order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders