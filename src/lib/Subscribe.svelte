<script>
    export let header;
    export let cta;

</script>

<!-- Begin Mailchimp Signup Form -->
<section class="subscribe">
<form action="https://help.us11.list-manage.com/subscribe/post?u=b9c019f9cb34eb064763cc132&amp;id=ff27076012" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div class="subscribe-field">
        <h2>{header}</h2>
        <h3>{cta}</h3>
        <div class="field">
            <input type="email" value="" name="EMAIL" placeholder="Enter your email address" class="input-email" id="mce-EMAIL">
            <input type="submit" value="Subscribe" name="subscribe" class="submit-button">
        </div>
    </div>
    <div class="gdpr">
        <div class="gdpr-note">
            <h4>Marketing Permissions</h4>
            <p>Please select all the ways you would like to hear from MPAth:</p>
            <fieldset class="required" name="interestgroup_field">
            <label class="checkbox subfield" for="gdpr_46106"><input type="checkbox" id="gdpr_46106" name="gdpr[46106]" value="Y" class="av-checkbox "><span>Email</span> </label>
            </fieldset>
            <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
        </div>
        <div class="gdpr-legal">
            <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
        </div>
    </div>
</form>
</section>

<style>

    h2 {
        font-weight: 700;
        padding-top: 30px;
        margin-bottom: .5rem;
        font-size: 1.125rem;
    }

    h3 {
        font-weight: 400;
        margin-bottom: .5rem;
        font-size: 1.125rem;
    }

    h4 {
        font-weight: 700;
    }

    .input-email {

        border:solid 1px #ccc;
        border-radius: 3rem;
        width: 50%;
        height: 3rem;
        padding-left: 20px;
        font-family: montserrat, 'sans-serif';
        font-weight: 200;
        font-size: 1rem;
    }

    .submit-button {
        width: 50%;
        margin-top: .5rem;
        padding: 0 1rem;
        height: 3rem;
        border-radius: 3rem;
        border: solid 1px #FBE26B;
        background-color: #FBE26B;
        font-family: montserrat, 'sans-serif';
        font-weight: 700;
        font-size: 1rem;
    }

    .submit-button:hover{
        text-decoration: none;
        filter: brightness(105%);
    }

    .gdpr {
        font-family: montserrat, 'sans-serif';
        font-weight:400;
        margin-top: 1rem;
        font-size: .75rem;
        line-height: 1.25rem;
        color: #505050;
    }

    @media only screen and (min-width: 450px) {
        .input-email {
            width: 65%;
        }
        .submit-button {
            width: 25%;
        }
    }

    @media only screen and (min-width: 768px) {

        .field {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
        }
    }

    @media only screen and (min-width: 1280px) {

        h2 {
            font-size: 1.125rem; 
            margin-top: 2rem;
        }

        h3 {
            font-size: 1rem;
        }
    }
</style>
