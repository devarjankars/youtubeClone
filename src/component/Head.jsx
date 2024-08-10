import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';


function Head() {
  const dispatch =useDispatch();
    const handleToggle=()=>{
        dispatch(toggleMenu());

    }
  return (
  <div className='grid grid-flow-col shadow-xl '>
    <div className='flex col-span-1'>
       
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzT5F99BdBgti0VAljMkLZEqCInS3I1UhTw&s"
        className='m-2 p-2 h-14 cursor-pointer '
        onClick={handleToggle}
         alt="Siderbar"  />
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/AAD/////Rkb/4+P/xsb/09P/ra3/+Pj/r6//bGz/j4//wMD/8/P/s7P/+/v/Skr/qKj/2Nj/fHz/y8v/YWH/lJT/m5v/oqL/XFz/GRn/VFT/5ub/srL/u7v/ior/Z2f/d3f/goL/cXH/MDD/7u7/Dw//MjL/Pj7/GBj/T0//KSn/QUH/hYX/3d3/IyP/OTmPTp8NAAADbklEQVR4nO3c6W7aQBhG4TGL2RP2AAmYxaTZIPd/d7XdqGpLIzEeeL9EOs/PRpF6hCfjmbFxDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINB+/vL4ersYt9ab9mQybXZqmdGgnjlU/1D8S32U/7TTjOO7yWq4TWaLRWV33Fs3/Ndrsl41O6NBNU27jZsoQDdNs/xOczqcvVhX/bapd0OaPtVIe8/WbbnJdfI+DGbWfYvqNftyPdtxub52X2ZwNAxsCQKjqGoX+Br0V/N8HbPCuiYwirZGgYkq0Ow6lX2EVh/iURcY1UwKh8LC7tyi8E5YGI0tCpfKwqlF4UBZOLIovFcWphaFqbIwMrj/nl911XTCYBX12JAWtvWFFWlg1NcXLrSFBnc1Y5//3yG48F5f6LX6/dEKnVsMpguv29KKc+2wv0zdJ3nhm2eh2z+EFN68ywsnvoXO3Y4CEvVbp1P/wmzwlh+O+im/X6YwYDi25IVxuUI3b5bboRvKC5slC7PhWGqDZyUv7JUuLDccJ/JCryV+5d/fXnlfqnffrNA9+Q5H/a13J6zQe3aM5YW10ELnEp/h+CDuu0hhNhzPnx170rqc1zX2WaE7nj0cl8q4wmUKs+F45sWgL7zIVVo47/5Pf4h4qcJzP0N9YfBsUTh/HH7TwtX5m676cRh4T5Pzmg/1s0Vwoec9jX7GD1lbuBL3pfq7tvLrw5z/2kJ/511yF6NQZn2oXz15HXJfYI2vXwGX2E0seA/AD/pdjFW5wtJ7bfqdKN9d/ULAfqn+oaGtf2HQnrf+eROv07Xi3MJrBj2xkBd6nZCGnz1Ft/JCr1Pu8PPDxk5euPP5TMLPgA3OD532aROLR4a0TwwZnOO7q7+H8BeLB9u8NmqC6RfAnouLYBaPX7alhWuDwpm0UP8oRrYMkhYaBGonRJs3LpR/TG1eDFK+jqBf/+aETwnbvG+hnBENnp8tvKg+xK7ZS8+qkWgzCgua61S/GSxONA107u3ab8rebGwDnXu87hteS/3+zKndtHqdt0sa1cmX+eaI+WI7iZejwSHtBsY2uun9oV7r9dvb5y/5HSD743tlMU6S/LtNpv04t6zVfn3BSbV68u0mxU96cdyftjfrJElmz+/Hpy8ZBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvpefBLQ+oPu+OqMAAAAASUVORK5CYII='   
          className='m-2 p-2 h-14 ' alt="Youtube"  />
   </div> 
   <div className='col-span-10'>
    <input type="text" name="Search" id=""  className=' w-1/2 border border-gray-400 m-2 p-2 h-10 rounded-l-full text-black'/>
    <button type="submit" className='bg-black  text-white p-2 rounded-r-full'>Search</button>
   </div>
    <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTtVyVbZYAuYmQT2F4RpBDWSW8sbcgmuODg&s"
         className='h-14 m-2 p-2'  alt="user"  />
     </div>
     
</div>
  )
}

export default Head