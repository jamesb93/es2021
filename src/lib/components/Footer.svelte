<footer class='container'>
    <div class="top">
        <img class='footer-break' src='/logo/circle1.png' alt='electric spring logo'/>
        <div class='line' />
    </div>
    <div class="bottom">
        <div class="left">
            <div class='contact'>
                For any questions about the promotion of the events please contact: <a href='mailto:electic.spring@hud.ac.uk'>electric.spring@hud.ac.uk</a>
            </div>
    
            <div class='address'>
                <span>University of Huddersfield</span>
                <span>Richard Steinitz Building</span>
                <span>Queensgate</span>
                <span>HD1 3DH</span>
                <span>United Kingdom</span>
                <span>Admission to all events is free of charge</span>
            </div>
            
            <div class="attribution">
                ©2022 Electric Spring. Designed by <a href='https://jamesbradbury.net'>James Bradbury</a> and Niamh Dell
            </div>
        </div>
    
        <div class="right">
            <img class='host' src='/host.jpg' alt='Supporting institutions logo' />
            <img class='host' src='/host2.jpg' alt='Supporting institutions logo' />
        </div>
    </div>
</footer>

<style lang='scss'>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .top {
        display: grid;
        place-items: center;
        grid-template-columns: auto;
        gap: 1em;
    }

    .bottom {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: auto;
        font-family: $overpass;
        padding-bottom: 3em;
        width: 100%;
    }

    .line {
        width: 100%;
        height: 2px;
        background-color: rgb(222, 222, 222);
    }

    .footer-break {
        width: 3rem;
        margin: 0 auto;
    }

    .address {
        display: flex;
        flex-direction: column;
    }

    .host {
        max-width: 200px;
    }
</style>