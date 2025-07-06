import styles from './Reviews.module.css';
import { BsStarFill } from "react-icons/bs";
import review from "../../assets/images/review-graph.png";
export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ];

    return <section className={styles.hostReviews}>
        <div className={styles.topText}>
            <h1>Your reviews</h1>
            <p>last <span>30 days</span></p>
        </div>
        <img src={review} alt="review graph" />
        <h3>Reviews (2)</h3>
        {reviewsData.map(({ rating, name, date, text, id }) => (
            <div key={id}>
                <div className={styles.review}>
                    {[...Array(rating)].map((_, i) => (
                        <BsStarFill className={styles.star} key={i} />
                    ))}
                    <p className={styles.reviewName}>{name} <span>{date}</span></p>
                    <p>{text}</p>
                </div>
                <hr />
            </div>
        ))}
    </section>;
}