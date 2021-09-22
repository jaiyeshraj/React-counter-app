import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
     const [num, setNum] = useState(0);

      const incNum = () => {
          setNum( num + 1 );
      };

      const decNum = () => {
          if(num > 0){
            setNum( num - 1 );
          }else{
              setNum(0);
              alert(`Zero Limit Reached`);
          }
    };
    

    return (
        <>
         <div className="main-div">
             <div className="center-div">
                 <h1>{num}</h1>
                 <div className="btn_div">
                 <Button variant="outlined" onClick={ incNum }> INCREMENT </Button>
                 <Button variant="outlined" onClick={ decNum }> DECREMENT </Button>
                 </div>
             </div>
             </div>   
        </>
    )
}

export default Counter;
