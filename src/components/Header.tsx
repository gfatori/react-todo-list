import todoLogo from '../assets/todo.svg';
import rocket from '../assets/rocket.svg';

import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocket} alt="Logotipo do todo-list" />
                <img src={todoLogo} alt="Logotipo do todo-list" />
            </div>
        </header>
    );
}