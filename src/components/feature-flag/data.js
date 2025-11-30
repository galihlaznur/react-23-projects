const dummyApiResponse = {
    featureLightDarkMode: true,
    featureTicTacToe: false,
    featureColorGenerator: true,
    featureAccordion: false,
    featureGithubProfileFinder: true,
};

function FeatureFlagData() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) {
            setTimeout(() => {
                resolve(dummyApiResponse);
            }, 1000);
        } else {
            reject(new Error("No data available"));
        }
    });
}

export default FeatureFlagData;