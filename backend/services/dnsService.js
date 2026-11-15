
const dns = require("dns").promises;

async function lookupDomain(domain) {
    try {
        const addresses = await dns.lookup(domain, {
            all: true
        });

        const uniqueAddresses = [
            ...new Map(
                addresses.map(item => [
                    `${item.address}|${item.family}`,
                    {
                        address: item.address,
                        family: item.family
                    }
                ])
            ).values()
        ];

        return {
            status: "Success",
            domain,
            ipAddresses: uniqueAddresses
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
