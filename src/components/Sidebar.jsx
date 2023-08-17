import { Link } from "react-router-dom";

export default function Sidebar({items, onChapterClick}) {
  return (
      <div className="sidebar">
        <ul>
          {items.map((item, index) => (
            <li key={index}><Link to="#" onClick={(e) => {
              e.preventDefault()
              onChapterClick(item.name)
            }}
             className="sidebar-link">{item.name}</Link></li>
            ))}
            
          
        </ul>
      </div>

  )
}
