import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!-- Footer Section -->
    <footer class="footer-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright text-center">
              <p>&copy; Sylvester Das 2021. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer Section -->
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
