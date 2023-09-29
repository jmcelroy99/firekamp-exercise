import moment from "moment"
import { ForecastType } from "../types/forecast.type";

export const splitForecastListByDay = (list: Array<ForecastType>) => {
    const groupedData: any = {};
    for(const element of list) {
        const date = moment(element.dt_txt).format("YYYY-MM-DD");    
        if (!groupedData[date]) {
          groupedData[date] = [];
        }
    
        groupedData[date].push(element);
    }
    return Object.values(groupedData) as Array<Array<ForecastType>>;
}