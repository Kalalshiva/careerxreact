import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

import App16 from "./App16";
import App17 from "./App17";
const sqrfunction =(n) =>{
    return n*n;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App flag = {false} />);
//root.render(<App5 name="John"/>);
root.render{
<>
<App16 val={5} fn={sqrfunction}/>
<App17 val={7} fn={sqrfunction}/>
</>
};