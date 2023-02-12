import React from 'react'
interface Props {
  query : string;
}

const Trade = ({query}: Props) => {
  const currency = [
    { id : 0 , name : 'BTC/THB'},
    { id : 1 , name : 'BUSD/THB'},
    { id : 2 , name : 'USDT/THB'}
  ]
  return (
    <section className="container-trade">
      <div className='market'>
        <div className='selecter-container'>
          HELLO
        </div>
      </div>
    </section>
  )
}

export default Trade