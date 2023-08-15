import { Link } from "react-router-dom";

export default function Sidebar({items}) {
  return (
      <div className="sidebar">
        <ul>
          {items.map((item, index) => (
            <li key={index}><Link to={item.link} className="sidebar-link">{item.name}</Link></li>
            ))}
            
          
        </ul>
      </div>

  )
}
