function openCEOMessage() {

    document.getElementById('message_button').addEventListener('click', function () {

        let message = "Dear Reader, <br><br> \
            You probably know that I don't make stock recommendations. However, I have two thoughts regarding your personal expenditures that can save you real money. I'm suggesting that you call on the services of two subsidiaries of Berkshire: GEICO and Borsheim's.\n \
            I estimate that about 40% of all auto drivers in the country can save money by insuring with GEICO. The figure is not 100% because insurers differ in their underwriting judgments, with some favoring drivers who live in certain geographical areas and work in certain occupations more than GEICO does. I believe, however, that GEICO more frequently offers the low price than does any other national carrier selling insurance to all comers. You can quickly find out whether you can save money by going to www.geico.com or by calling 800-555-2756.\n \
            Fine jewelry, watches and giftware will almost certainly cost you less at Borsheim's. I've looked at the figures for all publicly-owned jewelry companies and the contrast with Borsheim's is startling. Our one-store operation, with its huge volume, enables us to operate with costs that are fully 15-20 percentage points below those incurred by our competitors. We pass the benefits of this low-cost structure along to our customers.\n \
            Every year Borsheim's sends out thousands of selections to customers who want a long-distance opportunity to inspect what it offers and decide which, if any, item they'd like to purchase. We do a huge amount of business in this low-key way, which allows the shopper to conveniently see the exceptional values that we offer. Call Sean Moore or Karen Goracke at Borsheim's (800-642-4438) and save substantial money on your next purchase of jewelry.\n \
            <br><br>Sincerely, <br> \
            Warren E. Buffett";

        document.getElementById('section_2').style.opacity = '0';
        document.getElementById('ceo_message').style.transition = 'opacity 2s ease-in-out';
        document.getElementById('ceo_message').style.opacity = '1';
        document.getElementById('ceo_message').style.border = '2px solid var(--color-5)';
        document.getElementById('ceo_message').style.boxShadow = '0 5px 10px 0 var(--color-5)';
        document.getElementById('ceo_message').innerHTML = message;

        setTimeout(function () {
            document.getElementById('section_2').style.opacity = '1';
            document.getElementById('ceo_message').style.opacity = '0';
            document.getElementById('ceo_message').innerHTML = '';
        }, 10000);
    });

}

