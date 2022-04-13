import { Link, Outlet } from 'react-router-dom'

function Category () {
  return (
    <div>
        <h2>Halaman Category</h2>
        <ul>
            <li><Link to="/category/foods">Foods</Link></li>
            <li><Link to="/category/drinks">Drinks</Link></li>
        </ul>
        <hr/>

        <Outlet />
    </div>
  )
}

export default Category
