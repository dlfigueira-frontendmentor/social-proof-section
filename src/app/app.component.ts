import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '10,000+ of our users love our products.';
  details = 'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.';
  mediaReviews = [
    {
      rating: 5,
      name: 'Reviews'
    },
    {
      rating: 5,
      name: 'Report Guru'
    },
    {
      rating: 5,
      name: 'BestTech'
    }
  ];
  buyerReview = [
    {
      photo: '/assets/image-colton.jpg',
      name: 'Colton Smith',
      type: 'Verified Buyer',
      review: '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "'
    },
    {
      photo: '/assets/image-irene.jpg',
      name: 'Irene Roberts',
      type: 'Verified Buyer',
      review: '" Customer service is always excellent and very quick to turn around. Completely delighted with the simplicity of the purchase and the speed of the delivery. "'
    },
    {
      photo: '/assets/image-anne.jpg',
      name: 'Anne Wallace',
      type: 'Verified Buyer',
      review: '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "'
    }
  ];

  getMediaReviewMessage(mediaReview: { rating: number, name: string }): string {
    return 'Rated ' + mediaReview.rating + ' Stars in ' + mediaReview.name;
  }
}
