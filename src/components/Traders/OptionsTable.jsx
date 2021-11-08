import { Typography } from "@mui/material";

const OptionsTable = (options) => {
    const { riskTolerance, strategies, timeFrame, analysis, style } = options;
    return <div className="optionsTable">
      <div className="optionsRow1"> 
        <Typography>Risk Tolerance</Typography>
        <Typography align="right">{riskTolerance}</Typography>
      </div>
      <div className="optionsRow2"> 
        <Typography>Strategies</Typography>
        <div className="optionsColumn"> {strategies.map(x => <Typography align="right">{x}</Typography>)} </div>
      </div>
      <div className="optionsRow1"> 
        <Typography>Time Frame</Typography>
        <div className="optionsColumn"> {timeFrame.map(x => <Typography align="right">{x}</Typography>)} </div>
      </div>
      <div className="optionsRow2"> 
        <Typography>Analysis</Typography>
        <Typography align="right">{analysis}</Typography>
      </div>
      <div className="optionsRow1"> 
        <Typography>Style</Typography>
        <Typography align="right">{style}</Typography>
      </div>
    </div>
}

export default OptionsTable;