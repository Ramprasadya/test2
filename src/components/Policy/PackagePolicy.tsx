import { useState } from "react";

type Tab = {
    id: string;
    label: string;
    content: string[];
};

const PackagePolicy = () => {
    const tabs: Tab[] = [
        {
            id: "terms",
            label: "Terms & Conditions",
            content: [
                "Above prices are subject to change.",
                "Applicable on international bookings only – As per new Govt. norms effective 01 Oct 2020. TCS applicable @5% on land package amount other than airfare. Additional cost is payable extra and can be claimed while filing Income Tax Return.",
                "No booking stands confirmed until full payment is received.",
                "Visa fees & charges are extra if not included.",
                "ROE is subject to change at the time of final payment.",
                "Standard check-in time is 1400 hrs & check-out time is 1200 hrs. May vary from one country to another.",
                "Any amount paid towards activities/services not utilized during tour is non-refundable under any circumstances.",
                "We are not responsible for visa rejection and visa fees/service charges are non-refundable.",
                "We are not responsible for any downgrade of aircraft or seating class by the airline.",
                "We are not responsible for airline meal issues or baggage loss/damage due to mishandling.",
                "We are not responsible for flight cancellation/delay due to unforeseen reasons; best possible solution will be worked out.",
                "Before booking ensure passports are valid for at least 6 months from date of return journey.",
                "All disputes shall fall under exclusive jurisdiction of courts in Delhi, India.",
            ],
        },
        {
            id: "booking",
            label: "Booking Terms",
            content: [
                "At the time of booking, INR 10,000 per person is required as advance for processing the booking.",
                "Once booking is confirmed, hotel confirmation number will be shared and you may cross-check directly with the hotel.",
                "Balance payment can be paid in 3–4 installments depending upon departure dates.",
                "Once all payments are completed, confirmed hotel vouchers will be released.",
                "In case of delay in payment due to justified reasons, please inform us to update the new date in the system.",
                "Payments must be transferred as per given schedule and must end at least 25 days before departure.",
            ],
        },
        {
            id: "cancellation",
            label: "Cancellation Policy",
            content: [
                "From date of booking, cancellation charge of INR 5,500 per person applicable till 30 days before travel date.",
                "From 21 to 30 days before departure, cancellation charges will be 50% of the tour cost.",
                "Less than 21 days before departure – Total amount will be forfeited and no refund shall be given.",
                "No show – Total amount will be forfeited and no refund shall be given.",
                "In case of non-refundable booking, cancellation charges will be advised at the time of processing.",
                "If due to RTPCR (Covid report) cancellation, airline cancellation charges will apply as per airline policy.",
                "Covid report enabling reschedule will be shared from resort reservations if applicable.",
                "Paid amount will not be refunded and will be issued as Credit Shell / Credit Note usable for future booking.",
                "Cancellation policy is subject to change and depends on hotel and airline cancellation rules.",
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState("terms");

    const activeContent = tabs.find(tab => tab.id === activeTab);

    return (
        <>
            {/* Tabs */}
            <div className="flex gap-6 border-b mb-6" >
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-2 text-sm font-medium transition-colors cursor-pointer ${activeTab === tab.id
                                ? "border-b-2 border-[#3fa72a] text-shadow-[#3fa72a]"
                                : "text-gray-600 hover:text-black hover:border-[#3fa72a] hover:border-b-2  "
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-white shadow-sm rounded-md p-6">
                {activeContent?.content.length ? (
                    <ul className="list-disc pl-5 space-y-3 text-gray-800 text-sm leading-relaxed">
                        {activeContent.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-sm">
                        Content will be updated soon.
                    </p>
                )}
            </div>
        </>
    );
}

export default PackagePolicy