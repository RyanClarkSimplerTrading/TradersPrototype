import JohnImg from '../images/1-John/john-hero.png'
import HenryImg from '../images/2-Henry/henry-hero.png'
import BrunceImg from '../images/3-Bruce/Bruce-hero.png'
import DanielImg from '../images/4-Danielle/danielle-hero.png'
import AllisonImg from '../images/5-Allison/allison-hero.png'
import RagheeImg from '../images/Raghee/Raghee-hero.png'

const traderMock = [
    {
      name: "John Carter",
      title: "Founder of Simpler Trading®",
      description: `John's trading strategy combines expert technical analysis with an overall macro, fundamental view. John is the trading expert everyone turns to when the markets go awry.`,
      image: JohnImg,
      memberships: {
        options: {
          riskTolerance: 'High',
          strategies: [
            'Squeeze', 'Buying/Selling Straight', 'Calls and Puts', 'Vertical Spreads', 'Butterflys'
          ],
          timeFrame: [
            'Intra-Day', 'Swing', 'Position'
          ],
          analysis: 'Technical, Fundamental/Marco',
          style: 'Directional'
        }
      }
    },
    {
      name: "Henry Gambell",
      title: "Senior Managing Director of Options Trading",
      description: `Henry focuses heavily on scanning for new setups, managing open trades, and walking traders through new trades. He looks at the markets with a trend following, conservative take.`,
      image: HenryImg,
      memberships: {
        options: {
          riskTolerance: 'Medium',
          strategies: [
            'Squeeze', 'Ratio Spreads', 'Vertical Spreads',  'Butterflys', 'Unbalanced Butterflys'
          ],
          timeFrame: [
            'Intra-Day', 'Swing', 'Position'
          ],
          analysis: 'Technical, Fibonacci',
          style: 'Directional, Non-Directional'
        }
      }
    },
    {
      name: "Bruce Marshall",
      title: "Director of Options & income Trading",
      description: `If you’re looking to improve you risk/reward ratio, or you’re not able to devote large amounts of time sitting watching the charts, Bruce may be just the trader you’re looking for.`,
      image: BrunceImg,
      memberships: {
        options: {
          riskTolerance: 'Low/Medium',
          strategies: [
            'Butterflys', 'Calendars', 'Diagonals'
          ],
          timeFrame: [
            'Swing', 'Position'
          ],
          analysis: 'Technical, Fundamental, Mathematical',
          style: 'Directional, Non-Directional'
        }
      },
    },
    {
      name: "Danielle Shay",
      title: "VP of Options",
      description: `Danielle is the ideal trading mentor. Whether you’re a new or seasoned trader, Danielle addresses your questions on how to understand and apply our strategies here at Simpler.`,
      image: DanielImg,
      memberships: {
        options: {
          riskTolerance: 'Low/Medium',
          strategies: [
            'Straight Calls and Puts', 'Vertical Spreads', 'Butterflys'
          ],
          timeFrame: [
            'Intra-Day', 'Swing'
          ],
          analysis: 'Technical',
          style: 'Directional'
        }
      }
    },
    {
      name: "Allison Ostrander",
      title: "Director of Risk Tolerance & Trader",
      description: `Allison's unique view of how to look at Capital Risk, the Charts, and the Option Chain can give any trader a new perspective on investing.`,
      image: AllisonImg,
      memberships: {
        options: {
          riskTolerance: 'Low',
          strategies: [
            'Vertical Spreads', 'Butterflys', 'Diagonals', 'Calendars', 'Iron Condors'
          ],
          timeFrame: [
            'Intra-Day', 'Swing',
          ],
          analysis: 'Technical',
          style: 'Non-Directional'
        }
      },
    },
    {
      name: "Raghee Horner",
      title: "Managing Director of Futures Trading",
      description: `Trading futures, spot currencies, options, and equities across any time frame is Raghee’s area of expertise. If you’re looking to trade in any of these, she’s the best there is.`,
      image: RagheeImg,
      memberships: {
        
      },
    },
  ]

  export default traderMock;