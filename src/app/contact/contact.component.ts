import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Contact` component loaded asynchronously');

@Component({
  selector: 'contact',
  styles: [`
  `],
  template: `
    <section id="contact-us">
        <div id="slide-7" class="homeSlide">
          <div class="bcg" data-0-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -100px;" data-bottom-top="background-position: 50% 100px;">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-sm-8 col-xs-12" >
                 <div class="scrollrama-animate" data-animation="fade-in" data-delay="300" data-easing="ease" data-offset="60%" data-speed="1000">
                    <div class="black-content-box">
                      <h1>Thank You Jacob Stone</h1>
					  <div class="black-content-box-wrap">
						  <p>It was a pleasure talking to you, have fun at the game. Don’t forget to say hello to Steve for me! I know you’re going to have a great time, everyone does! Maybe I will see you there? I will be in Section 120.</p>
						  <p>Let's go Cowboys!</p>
					  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-info-bar bt_hidden" data-0-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -100px;" data-bottom-top="background-position: 50% 100px;"> 
                <div class="container">
                         <div class="row">
                                <div class="contact-info-bar-wrapper">
                                        <div class="img-section">
                                            <img [src]="repImage"  alt="Stacy Smith" /> 
                                        </div>
                                        <div class="contact-info">
                                                <h4 class="contact-info-name">Stacy Smith</h4>
                                                <ul class="contact-more-info">
                                                        <li class="contact-email">Email:<a href="mailto: JSmith@Pistons.com" class="color-white"> JSmith@Pistons.com</a></li>
                                                        <li class="contact-phone">Phone: <a href="tel:410-985-8926" class="color-white">410-985-8926</a></li>
                                                </ul>        
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="contact-info-bg"><div class="contact-info-bg-inner"></div></div>
        </div>
      </section>
      <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-2 col-xs-12 text-right footer-logo"> 
                    <img [src]="pitchmanFooterLogo" alt="Pitchman" />
                </div>
                <div class="footer-copyright-text col-md-8 col-sm-10 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-offset-0">
                    <p>&copy; 2015 IOMEDIA, Inc. All Rights Reserved. “Pitchman" and the “Pitchman" logo are registered trademarks of IOMEDIA, Inc.</p>
                    <p>&copy; 2015 Dallas Cowboys Holdings. L.P. All Rights Reserved. Use of website is governed by the Terms of Use and Privacy statement.</p>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class Contact {
  localState;
  pitchmanFooterLogo = '/assets/images/footer-logo.png';
  repImage = '/assets/images/stacy-smith.jpg';
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Contact` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}
