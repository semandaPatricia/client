import { useState } from "react"


import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
  } from "tw-elements-react";

export default function Pizza({ ProductList }) {
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState('small')
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=' bg-slate-400 flex flex-col items-center'>
      {ProductList &&
        <>
        <div className="">
        <h1 className=" ">{ProductList.name}</h1>
          <img src={ProductList.image} alt='pizzatypes' className='h-40 w-44' />
        </div>
        
          <div className='container flex items-center justify-center gap-5  m-5'>
            <div className='w-100  '>
              <p>Variants</p>
              <select value={varient} onChange={(e) => setVarient(e.target.value)}>
                {ProductList.varients.map((varient) => {
                  return <option value={varient}>{varient}</option>
                })}
              </select>
            </div>

            <div className='w-100  gap-3'>
              <p>Quantity</p>
              <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>
                })}
              </select>
            </div>
          </div>

          <div className='container  flex items-center justify-center gap-2'>
            <div className=' price '>
              <h1> price:{ProductList.prices[0][varient] ? ProductList.prices[0][varient] * (isNaN(quantity) ? 1 : quantity) : 0}</h1>
            </div>
            <div className=' btn '>
              <button className='bg-red-600  p-1'> Add to cart</button>
            </div>
          </div>
          
           {/* <!-- MODAL COMPONENT ELEMENT FROM TW-ELEMENTS--> */}
          <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => setShowModal(true)}
        >
          Launch demo modal
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                {ProductList.name}
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody className="h-40 w-40"> 
            <img src= {ProductList.image} alt="pizzapicture" className="w-40 h-50" />
            <p>{ProductList.description}</p>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>


        </>
      }
    </div>
  )
}