"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const states = await queryInterface.bulkInsert(
            "States",
            [
                { state_code: "AL", state_name: "Alabama", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "AK", state_name: "Alaska", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "AZ", state_name: "Arizona", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "AR", state_name: "Arkansas", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "CA", state_name: "California", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "CO", state_name: "Colorado", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "CT", state_name: "Connecticut", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "DE", state_name: "Delaware", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "FL", state_name: "Florida", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "GA", state_name: "Georgia", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "HI", state_name: "Hawaii", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "ID", state_name: "Idaho", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "IL", state_name: "Illinois", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "IN", state_name: "Indiana", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "IA", state_name: "Iowa", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "KS", state_name: "Kansas", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "KY", state_name: "Kentucky", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "LA", state_name: "Louisiana", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "ME", state_name: "Maine", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "MD", state_name: "Maryland", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "MA", state_name: "Massachusetts", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "MI", state_name: "Michigan", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "MN", state_name: "Minnesota", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "MS", state_name: "Mississippi", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "MO", state_name: "Missouri", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "MT", state_name: "Montana", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "NE", state_name: "Nebraska", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "NV", state_name: "Nevada", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "NH", state_name: "New Hampshire", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "NJ", state_name: "New Jersey", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "NM", state_name: "New Mexico", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "NY", state_name: "New York", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "NC", state_name: "North Carolina", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "ND", state_name: "North Dakota", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "OH", state_name: "Ohio", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "OK", state_name: "Oklahoma", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "OR", state_name: "Oregon", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "PA", state_name: "Pennsylvania", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "RI", state_name: "Rhode Island", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "SC", state_name: "South Carolina", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "SD", state_name: "South Dakota", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "TN", state_name: "Tennessee", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "TX", state_name: "Texas", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "UT", state_name: "Utah", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "VT", state_name: "Vermont", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "VA", state_name: "Virginia", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "WA", state_name: "Washington", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "WV", state_name: "West Virginia", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "WI", state_name: "Wisconsin", createdAt: new Date(), updatedAt: new Date(), },
                { state_code: "WY", state_name: "Wyoming", createdAt: new Date(), updatedAt: new Date(), },
            ],
            {}
        );


    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("States", null, {});
        return
    },
};
