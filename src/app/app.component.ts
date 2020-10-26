import { Component } from '@angular/core';

export interface Studio {
  name: string;
  address: string;
  phone: string;
  price: string;
  photo: string;
  link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Фотостудии в Днепре';

  public studios: Studio[] = [
    {name: 'Чеширский кот', address: 'г.Днепр, пр. Гагарина 43', phone: '+380982225252', price: '500₴', photo: 'https://lh3.googleusercontent.com/oyB1ok9AJW4ECAalM7xhrc3KbAr_4dfdoENmVW1k_elkX84TFHZuLzpMuARkYAE7ztV2PMNHtj0Lul_utvr9n1pcFg=w1500-h1000-l95', link: 'https://www.facebook.com/CheshireCat.foto/'},
    {name: 'Emotion', address: 'г.Днепр, ул.Короленко 3, офис 501', phone: '+380675682689', price: '500₴', photo: 'https://lh3.googleusercontent.com/Bb77sTdOPuuMiwuvPhVjZC-fCIqN-SeXhx4GSbQN3Ys8xjs6MRwc0kWcvr9AALHLzT3_9r8W6ofz3FB09LQoPtA=w1500-h1000-l95', link: 'https://emotiondnepr.com/'},
    {name: 'Moon Studio', address: 'г.Днепр, ул.Сведлова 42а', phone: '+380689709668', price: '400₴', photo: 'https://lh3.googleusercontent.com/JHwyhQzsSQ2cwKaEnIpr2PeEGXCOOrVUvVeQaz1Nhh8oIqeurEUhAOS2UTJolJvj09muMgnughgCqPx4u0Fok9QP=w1500-h1000-l95', link: 'gerg'},
    {name: 'B2B visual space', address: 'г.Днепр, Михаила Грушевского 6', phone: '+380631641794', price: '299₴', photo: 'http://3.bp.blogspot.com/-8u3mj9pF0sQ/UfEiSdmpxHI/AAAAAAAAAMQ/Pj2eLlkOM9Q/s1600/Cyc+Wall+at+Westlight+Studios+facing+northwest.jpg', link: 'http://b2bvisual.space/'},
    {name: 'Lightstudio', address: 'г.Днепр, ул. Артельная 10', phone: '+380632525680', price: '400₴',photo: 'https://lh3.googleusercontent.com/I1AKOALc7NVXiGkfDDLWwrzP-d4D6jbCSU9GNjHI77z19pYDYZQ0uT8Z2Iu7D3gkk_HTZ-q6xhVOpNMWdazBFYbq=w1500-h1000-l95', link: 'http://www.lightstudio.dp.ua/'},
    {name: 'London', address: 'г.Днепр, Европейская 15, офис 401', phone: '+380679050303', price: '500₴', photo: 'https://lh3.googleusercontent.com/Jj6Q7kDIYp5laiOGwyZTY4Nn-tYB87Nx7-yRGvQVkomTceqP7mq8pQzVVCIRM5anHgI8e6PoVOZ9ktYHrTdn_u_7=w1500-h1000-l95', link: 'https://www.facebook.com/london.studio.dp/'},
    {name: 'HOME', address: 'г.Днепр, пр.Яворницкого 57, офис 603', phone: '+380957826614', price: '400₴', photo: 'https://lh3.googleusercontent.com/aFzOR8uo7CE4G2OKGFO73YJyRiqya9gWqPZ_4fXEb5MoCTttUssStZrCtWWy8o674QMHdyTVUE3_RAEOhzYiRMNq3A=w1500-h1000-l95', link: 'https://www.facebook.com/feels.like.home.studio/'},
    {name: 'Simvolist', address: 'г.Днепр, ул.Погребняка, 18Г', phone: '+380675640394', price: '300₴', photo: 'https://lh3.googleusercontent.com/-smQ4dndZxECL3tCT0UGc30lI8cavmw1wi_WPwGLoSVCT8gUd1ShBKODaRqL-v6g4bdRPoPZFxgE4coxCGhs6vuhmQ=w1500-h1000-l95', link: 'egfe'},
    {name: 'IndeX', address: 'г.Днепр, Шевченко 59', phone: '+380661317916', price: '300₴', photo: 'https://lh3.googleusercontent.com/Klo0jn-SiAXC1e9z89TpvWOmgMWVfl7gC8lzyol4kTBADJb2DGc_R203Urj0xsjiW9EJawEC38QlidWt1e7Th4oV=w1500-h1000-l95', link: 'https://www.facebook.com/indexphotostudio'}
  ]
}
