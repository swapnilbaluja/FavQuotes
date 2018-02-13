
import{Quote} from "../data/quote.interface";
export class QuotesService {
private favQuote:Quote[]=[];
	addQuoteToFavorites(quote:Quote)
	{
		this.favQuote.push(quote);
		console.log(this.favQuote);

	}
	removeQuoteFromFavorities(quote:Quote)
	{
		const position=this.favQuote.findIndex(
		(
		quoteelemenet:Quote
		)=>
			{
		      		return quoteelemenet.id == quote.id;
			}
		);
			this.favQuote.splice(position,1);
	}
	getFavoritieQuote()
	{
		return this.favQuote.slice();
	}
	isFavorite(quote:Quote)
	{
		return this.favQuote.find(
		(
		quoteelemenet:Quote
		)=>
			{
		      		return quoteelemenet.id == quote.id;
			}
		);
		}
}