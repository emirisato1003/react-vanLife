import styles from './Income.module.css';
import graph from '../../assets/images/graph.png';

export default function Income() {
    const transactionData = [
        { amount: 720, date: "1/3/23", id: "1" },
        { amount: 560, date: "12/12/22", id: "2" },
        { amount: 980, date: "12/3/22", id: "3" }
    ];
    return <>
        <section className={styles.hostIncome}>
            <h1>Income page</h1>
            <p>Last <span>30 days</span></p>
            <h2>$2,260</h2>
            <img src={graph} alt="Income graph" />
            <div className={styles.top}>
                <h3>Your transactions (3)</h3>
                <p>Last <span>30 days</span></p>
            </div>
            <div className={styles.transactions}>
                {transactionData.map(item => (
                    <div key={item.id} className={styles.transaction}>
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    </>;
}