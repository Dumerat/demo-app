import "./collapse.css"
import {useState} from  "react";

export default function Collapse({title,content}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="collapse-heading">
                <p className="menu-title">{title}</p>
                <img onClick={handleToggle} className={`collapse-toggle ${isOpen ? "collapse-open" : " "}`} src="/images/left-arrow.svg" alt="open/close"></img>
            </div>
            {isOpen && (
                Array.isArray(content) ? (
                  <div className="collapse-content">
                    {content.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                ) : (
                  <div className="collapse-content">{content}</div>
                )
            )}
        </>
)}
