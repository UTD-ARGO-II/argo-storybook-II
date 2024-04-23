import Image from "../image/Image";
import BookLayout from "./BookLayout";
import img1 from '../../assets/bookImages/soc.jpg';
import img2 from '../../assets/bookImages/tog.jpg';
import img3 from '../../assets/bookImages/cob.jpg';
import img4 from '../../assets/bookImages/eita.jpg';
import BookInfo from "./BookInfo";
import { BookData

 } from "./BookInfo";
import Badge from "../badge/Badge";
function BookList() {
	const images = [img1, img2, img3, img4];
	return (
		<div>
			<div className="bookInfo">
				{BookInfo.map((book: BookData, i: number) => (
					<div className="completeBookDiv">
						<div className="image">
							<BookLayout
								variant="left"
								img={images[i]}
								imgWidth="180px"
								imgHeight="250px"
								header={book.title}
								subheader={`Author: ${book.author}`}
								body={book.desc}
								badge={`Rating: ${book.rating}`}
							/>
                            
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default BookList;
