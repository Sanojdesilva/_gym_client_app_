import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage {
  privacyInfo: string = 'Your privacy is important to us. By using this app, you agree to our Privacy Policy, which governs how we collect, use, and safeguard your personal information. Please refer to our Privacy Policy for more information.';
}

