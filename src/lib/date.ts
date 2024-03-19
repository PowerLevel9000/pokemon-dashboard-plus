const timeDiff = (fulfilledTimeStamp: any) => {
    const now: Date = new Date();
    const fulfilled: Date = new Date(fulfilledTimeStamp);
    const difference = Math.abs(now.getTime() - fulfilled.getTime());
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

export default timeDiff;