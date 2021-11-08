  import JohnImg from '../images/1-John/john-hero.png'
  import HenryImg from '../images/2-Henry/henry-hero.png'
  import BrunceImg from '../images/3-Bruce/Bruce-hero.png'
  import DanielImg from '../images/4-Danielle/danielle-hero.png'
  import AllisonImg from '../images/5-Allison/allison-hero.png'
  import BullishDB from '../images/5-Allison/Chart Setups/1-Bullish-DB.jpg'
  import BearishDB from '../images/5-Allison/Chart Setups/2-Bearish-DB.jpg'
  import BullishCBT from '../images/5-Allison/Chart Setups/3-CBT-Bullish.jpg'
  import ConsoCBT from '../images/5-Allison/Chart Setups/4-Conso-bear-CBT.jpg'
  import BearishCBT from '../images/5-Allison/Chart Setups/5-CBT-Bearish.jpg'
  import RagheeImg from '../images/Raghee/Raghee-hero.png'

  const traderMock = [
      {
        name: "John Carter",
        title: "Founder of Simpler Trading®",
        description: `John's trading strategy combines expert technical analysis with an overall macro, fundamental view. John is the trading expert everyone turns to when the markets go awry.`,
        image: JohnImg,
        overview: `In 1999, tired of talking to his goldfish while trading alone in his office, John Carter launched the company that has evolved into Simpler Trading. He's the trading expert everyone turns to when the markets go awry (as they often do), and many of our traders have taken ideas and strategies from him and morphed them into thier own strategies. He's truly one of the best with a level of charisma that draws people in, which has transformed him into the famous day trader he is today.

        As for his trading strategy, it combines expert technical analysis with an overall macro, fundamental view. However, what makes him a truely fantastic mentor on top of his vast knowledge, is his ability to make you feel as though you're talking to an old friend.`,
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
            style: 'Directional',
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
        quote: "When you take a look at the finer details of an option’s strategy, you will see an abundant amount of opportunity while maintaining your risk.",
        styleVideo: 'https://cdn.simplertrading.com/trader-bio-videos/trader_bio_AO_A_1.mp4',
        socialMedia: [
          { name: 'Twitter', link: "https://twitter.com/Allison_Trades" },
          { name: 'Twitch', link: "https://www.twitch.tv/allisontrades" },
          { name: 'YouTube', link: "https://www.youtube.com/user/SimplerOptions" },
        ],
        overview: `Allison graduated from Stephen F. Austin State University with a Bachelor of Fine Arts degree in Theatre. Wanting to make sure she wasn’t going to be a starving artist while pursuing theatre, Allison took up trading options after seeing her father successfully do the same. What started as an experiment with a paper trading account quickly grew into a passion. She decided to pursue trading full-time while investing in personal coaching classes. As a result, Allison was so successful that she made back her investment in her first trade! After that, there was no looking back.

        Fast forward to today, Allison has become an integral part of the Simpler Trading family. With her decade of options trading experience Allison continues to grow as a trader, sharing her knowledge within our community. Her experience in not only trading, but teaching others how to trade, shines through in her videos and blog posts. She has experienced and seen other traders go through the ups and downs of trading. Her goal is to help traders minimize the downs, so their ups can outshine in their account. Allison is able to explain complex trading strategies and chart patterns with ease for both beginners and advanced traders. Her unique view of how to look at Capital Risk, the Chart, and the Option Chain can give any trader a new perspective on investing.
        
        For those who have trouble with position sizing, chart reading, or options trading, Allison’s Recycling Risk sessions are a “must watch.” You can often find her participating in the Options Trading Room and the Training Room throughout the market day, or catch her outside of market hours teaching classes and hosting member webinars for the Simpler Community.`,
        chartSetups: [
          {
            name: 'The Divergent Bar Indicator',
            images: [BullishDB, BearishDB],
            discription: 'The Divergent Bar indicator was developed to confirm entering or exiting a trade, or in a more advanced trading strategy, as a confirmation for reversals. Is based on a comparative analysis of higher highs and lower lows. Allison typically uses a 30 minute or higher time frame for trading with this indicator and looks for a follow-through signal by seeing if a higher high or lower low occurs within the next three bars / candles.',
            use: `
            The Divergent Bar indicator can help determine the potential move of one (or potentially up to 3) bars into the future. The Divergent Bar Indicator can be used on any time frame. For an intraday style trade, I typically stick with the 30 min or 1 hour time frame for this indicator. Instead of still waiting on more trading data to start printing valid signals on other indicators, the Divergent Bar indicator can start giving you signals the very next day. The Divergent Bar Indicator can be used on any type of bar. I personally use the standard Bar. However, if you prefer the Candlestick Bar, it will work on that as well.

  

            There are two different types: the Bullish and Bearish Divergent Bar. The Divergent Bar indicator gives a clear signal of a Bullish or Bearish Divergent Bar just by a change in the Bar’s color. 
            
            
            
            A Bullish Divergent Bar signals a potential move to a higher high compared to the high of the bar forming the Bullish Divergent Bar. This Higher High typically happens within the next bar, but can take up to 3 bars to follow through on the signal
            
            The current price bar needs to meet the following criteria:
            
            The current bar needs to have a lower low compared to the prior bar.
            The current bar’s close needs to be in the top 50% of the current bar’s trading price range.
            For a Bullish Divergent Bar, sellers had brought the price to create that lower low. However, the buyers end up outweighing the sellers going to the close driving the price back up. This leads to a strong probability that the move up will likely continue to create a higher high than the current bar as buyers continue to jump in.
            
            
            
            A Bearish Divergent Bar signals a potential move to a lower low compared to the low of the bar forming the Bearish Divergent Bar.This Lower Low typically happens within the next bar, but can take up to 3 bars to follow through on the signal. 
            
            The current price bar needs to meet the following criteria:
            
            The current bar needs to have a higher high compared to the prior bar.
            The current bar’s close needs to be in the bottom 50% of the current bar’s trading price range.
            For a Bearish Divergent Bar buyers had brought the price to create that higher high. However, the sellers end up outweighing the buyers going into the close driving the price back down. This leads to a strong probability that the down up will likely continue to create a lower low compared to the current bar as sellers continue to jump out.
            
            
            
            If a Divergent Bar prints back to back, whether it is a Bearish and Bullish Divergent Bar, or two Bearish and two Bullish Bars, this can start to be an overall sign of consolidation.It does not mean the signal will not follow through, however it might not be as dramatic of a follow through for a higher high or lower lower. If you decided to take a trade off a Divergent Bar during consolidation there are two things you can take into consideration:
            
            Risk: You may look to hold a smaller Capital Risk in the trade in case it does not follow through.
            Price Target: consider taking a smaller price target with a lower GTC. This increases the possibility it will fill and you can still take a quick profit.
          `,
          link: 'https://www.simplertrading.com/divergent-bar-indicator/ ',
        },
        {
          name: 'The Compound Breakout Tool',
          images: [ BullishCBT, ConsoCBT, BearishCBT ],
          description: `The Compound Breakout Tool is a "3 in 1 study". It tracks individual "component studies" and indicates when they're in confluence to provide a very strong indication of a possible entry or exit for a trade. Minimum of two of three components aligned is recommended.`,
          use: `
          The Compound Breakout Tool is comprised of 3 separate studies:

          The Stochastics
          The MACDHistogram
          Several Simple Moving Averages
           
          
          The Compound Breakout Tool consists of three different lines, tracking the three different studies: When a signal first starts to print it will show up as a green (rising) or red (declining) box. 
          
           
          
          After printing the square,  it will continue to print a dot for each bar the signal is still valid. When looking at this indicator the perfect setup is when you have all three rows in line with each other printing the same color signal. This can easily be confirmed by the Triangle printed at the top or bottom. Sometimes waiting for all three signals to print in line, may take some time, or may never happen. This is why when two signals are in line, it can be the start of the set up and still a valid entry (however less conservative or one when compared to all three printing). 
          
           
          
          This tool can easily be identified by a colored dot printing top or bottom. The dots will continue to print until all three signals print in line, or until one stops printing/gets interrupted by the opposite signal. Not only is this indicator good at identifying a trend, but it can also help in determining consolidation or sideways movement. If there are a lot of green and red boxes printing back to back this can indicate the price is consolidating before it determines which trend direction it wants to move in next. Sometimes when this starts to occur and squeeze will begin printing at the same time.
          `,
          link: 'https://www.simplertrading.com/compound-breakout-tool/',
        }
      ],
      tradingPlan: {
        why: [
          'To create an overall growth in my mastery and $500 Challenge accounts each month to pay myself with at the end of the month and also have overall growth in my other accounts by the end of the year.',
          "To help support myself, my family, and the things I would like to pursue outside of trading",
          "To test out and discover new options or trading strategies in general that can be used successfully to grow an account.",
          "To grow an account of long term stock setups for my kids to pass on to them when they are older."
        ],
        goals: `
        My Monthly Goal is to see a positive account move every month so I can pay myself at the end of each month for my mastery and $500 Challenge Accounts. 

        In my other accounts, I want to keep a positive yearly target as well. At the end of the Year I also want to take half the profits and lock them in while keeping the rest in my account to continue  trading with.
        
        In the Account for my kids, I am just looking at good buying opportunities to hold long term stocks and I don’t plan to close/pull out any profits in here, but just see overall growth.
        `,
        objectives: `
        ​Creating positive growth in my account while keeping Risk low using my 25% rule so I never overinvest in my account. This allows me to trade off the technicals rather than my emotions. 

        To do less Earnings-LottoStyle trades this year. Though I find them very fun to jump into, oftentimes, the “big payoff” I am looking for doesn’t happen as I would like and it ends up eating away at my profits overall.
        `,
        markets:`Typically, I look at the Main US Indexes as well as symbols with Options available on them.`,
        timeFrames: `
        Intraday Time Frames- 1 min (only in strong volatile markets, please refer to my Profit Recycling Class to understand when to watch a 1 min time frame, or just ask me in the room), 5 min, 10 min, 30 min and 1 hr. 

        Daily, Weekly and Monthly Time Frames- for the Overnight Profit Strategy, Compound Butterfly Strategy, and Swing Trades.
        `,
        setups:`
        Run into Earnings, Standard Squeezes, Pullbacks to SMA’s on Bullish Trends or Bearish Trends, Profit Recycling Intraday Moves (especially in Volatile Markets), end of week pin trades of SPX, AMZN Friday Sell offs, Choppy/Consolidating Trends.
        `,
        entryRules: [
          "A Bullish Divergent Bar off Support in a Bullish Trend, or a Bearish Divergent Bar off Resistance of a Bearish Trend, or Back to Back Divergent Bars in a Consolidating Trend.",
          "A Squeeze and Compound Breakout Tool Signal in line with the Trend.",
          "A pullback to SMAs as support or resistance with confirmation it is holding."
        ],
        exitRules: [
          "If my profit target is hit.",
          "If there are signs of exhaustion on the Chart with momentum on the Awesome Oscillator.",
          "Several Days of a Bollinger Band Snap paired with a potential Bearish Divergent Bar (in a Bullish Trend) or a Bullish Divergent Bar (in a Bearish Trend).",
          "If the chart starts to move outside of the guidelines of my initial trade entry, then I will look to close out of the trade and protect whatever remaining capital is there and look for a new setup."
        ],
      },
      tradingStrategies: [
        {
          name: "Profit Recycling",
          type: "Options",
          filters: "Options, Profit Recycling, Low Risk, Intraday Trading without the Day Trading Rule, Small Account, Scalable",
          entryRules: [
            'Looking for an overall Bullish or Bearish Trend in the Simple Moving Averages',
            'The Compound Breakout Tool in agreement with the trend',
            'Ideally the price bouncing off support (Bullish Trend) or resistance levels (Bearish Trend)',
            'A squeeze printing, especially on multiple time frames, is a great bonus',
            'For intraday style trades, to avoid the Day Trading Rule, it needs to have a Daily Range that is at least twice the options strike increment (I.E. SPX has a 5 point strike increment, so it needs at least a 10 point Daily Range to consider Profit Recycling on the Intraday Charts.'
          ],
          tip: 'Only Risk what you are willing to lose. This will allow you to not get as emotional and follow the signal through.',
          indicators: ['Compound Breakout Tool', 'Squeeze', 'Multisqueeze'],
          timeFrames: [ 'Daily Chart', 'Weekly Chart', 'Intraday Trading', '1 min, 5 min, 10 min, and 30 min or 1 hr chart in a grid format'],
          management: `
          If the chart starts to change direction, consider Profit Recycling to help protect capital and reduce risk. This is also true for intraday trades where the underlying price starts to consolidate and trade flat, you want to be careful of theta decay, especially on a same day expiration.
          `,
          exits: `
          For Profit Recycling, it’s about having a profit target or an underlying price level in mind. If we hit your profit target and/or the underlying price level, you look to profit recycle the trade ideally for a guaranteed profit. From there you have locked in the profit and have a free bonus trade to decide if/when to close out. 

          Position Sizing:

          I always risk what I am 100% willing to lose. I typically do not risk the full amount as when the price goes against me I look to still cover the risk by profit recycling, but sometimes the underlying price can dramatically turn like on the Index for an intraday trade. By risking 100% what I am willing to lose, my account is okay even when those dramatic actions occur. 
          `
        },
      ],
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
        },
        simplerDayTrading: {

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