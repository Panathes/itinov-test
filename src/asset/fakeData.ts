export const fakeData = [
    {
        id: 1,
        nameAccount: "CCP",
        numberAccount: "123456789",
        balanceAccount: -25,
        operationAccount: [
            { id: 1, date: '2022-03-24', wording: 'Paiement', amount: 5000 },
            { id: 2, date: '2022-03-25', wording: 'Paiement à M.Loyer', amount: -5000 },
            { id: 3, date: '2022-03-29', wording: 'Norauto', amount: -25 },
            { id: 4, date: '2022-03-29', wording: 'Tipee', amount: 678 },
            { id: 5, date: '2022-03-29', wording: 'Equipement de streaming', amount: 870 },

        ]
    },
    {
        id: 2,
        nameAccount: "Livret A",
        numberAccount: "987654321",
        balanceAccount: 50000,
        operationAccount: [
            { id: 2, date: '2022-03-26', wording: 'Reboursement', amount: 5000 },
            { id: 3, date: '2022-03-27', wording: 'Paiement', amount: -500 },
        ]
    }
];