
const networkActivities = [];

function networkLogger(req, res, next) {
    const activity = {
        method: req.method,
        path: req.originalUrl,
        protocol: req.protocol,
        host: req.get("host"),
        requestTime: new Date().toLocaleString()
    };

    if (req.path !== "/api/network-activity") {
        networkActivities.unshift(activity);
        networkActivities.splice(20);
    }

    console.log("--------------------------------");
    console.log("HTTP NETWORK ACTIVITY");
    console.log("Method:", activity.method);
    console.log("API Path:", activity.path);
    console.log("Protocol:", activity.protocol);
    console.log("Host:", activity.host);
    console.log("Request Time:", activity.requestTime);
    console.log("--------------------------------");

    next();
}

function getNetworkActivities() {
    return networkActivities;
}

module.exports = {
    networkLogger,
    getNetworkActivities
};
