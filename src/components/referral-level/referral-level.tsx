import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'referral-level',
  styleUrl: 'referral-level.css',
  shadow: true,
})
export class ReferralLevel {
  /**
   * Referral level
   */
  @Prop() referralCount: number;

  private getLevelName(count: number): string {
    switch (count) {
      case 1:
        return 'one of them';
      case 2:
        return 'two of them';
      case 3:
        return 'three of them';
      default:
        return 'too many of them';
    }
  }

  render() {
    return <div>lalala {this.getLevelName(this.referralCount)}</div>;
  }
}
