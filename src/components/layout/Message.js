import { useState, useEffect, useRef } from 'react';
import styles from './Message.module.css';

function Message({ type, msg }) {
    const [visible, setVisible] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (!msg) {
            setVisible(false);
            return;
        }
        
        setVisible(true);
        
        
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100); 
        
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        
        return () => clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visible && (
                <div ref={messagesEndRef} className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )}
        </>
    );
}

export default Message;
