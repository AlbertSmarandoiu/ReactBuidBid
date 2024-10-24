import React from "react";
import * as WebBrowser from "expo-web-browser"; // Corrected import

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        const warmUp = async () => {
            await WebBrowser.warmUpAsync(); // Await the async function
        };

        warmUp(); // Call the async function

        return () => {
            const coolDown = async () => {
                await WebBrowser.coolDownAsync(); // Await the async function
            };

            coolDown(); // Call the async function
        };
    }, []);
};
