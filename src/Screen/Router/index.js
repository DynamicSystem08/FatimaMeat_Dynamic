import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from '../Router';
function Routering()
{
    return<BrowserRouter>
    <Routes>
        <Route path="/recipes" element={<Recipes/>}/>
    </Routes>
    </BrowserRouter>
}
export default Routering