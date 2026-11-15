const dns = require("dns").promises;

async function lookupDomain(domain) {
    try {
        const addresses = await dns.lookup(domain, {
            all: true
        });

        return {
            status: "Success",
            domain,
            ipAddresses: addresses.map(item => ({
                address: item.address,
                family: item.family
            }))
        };
    } catch (error) {
        return {
            status: "Failed",
            domain,
            ipAddresses: [],
            message: error.code || "DNS lookup failed"
        };
    }
}

module.exports = {
    lookupDomain
};