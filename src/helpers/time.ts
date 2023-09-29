import moment from "moment"

export const formatTime = (timestamp: string) => {
    return moment(timestamp).format("h A");
}

export const formatDay = (timestamp: string) => {
    return moment(timestamp).format("M/D");
}