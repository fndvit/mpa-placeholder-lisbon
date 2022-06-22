<script>
    export let header;
    export let cta;

</script>

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
<div>
<form action="https://fundaciovit.us11.list-manage.com/subscribe/post?u=b9c019f9cb34eb064763cc132&amp;id=ff27076012" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div>
        <h2>{header}</h2>
        <h3>{cta}</h3>

        <div class="field">
            <input type="email" value="" name="EMAIL" placeholder="Enter your email address" class="input-email" id="mce-EMAIL">
            <input type="submit" value="Subscribe" name="subscribe" class="submit-button">
        </div>
    </div>
</form>
</div>
    

<style lang="scss">

    h2 {
        font-weight: 700;
        padding-top: 30px;
        margin-bottom: 20px;
        font-size: 1.2rem;
    }

    h3 {
        font-weight: 300;
        margin-bottom: 20px;
        font-size: 1rem;
    }

    .input-email {

        border:solid 1px #ccc;
        border-radius: 24px;
        width: 100%;
        height: 30px;
        padding-left: 20px;

        font-family: montserrat, 'sans-serif';
        font-weight: 300;
        font-size: 0.5rem;
    }

    .submit-button {
        width: 50%;
        margin-top: 10px;
        height: 30px;
        border-radius: 24px;
        border: solid 1px #FBE26B;
        background-color: #FBE26B;

        font-family: montserrat, 'sans-serif';
        font-weight: 700;
        font-size: 0.5rem;

       
    }

    .submit-button:hover{
        text-decoration: none;
        filter: brightness(105%);
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
        .submit-button, .input-email {
            font-size: 10px;
            height: 40px;
        }

        .field {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
        }
    }

    @media only screen and (min-width: 1280px) {
        .submit-button, .input-email {
            font-size: 14px;
            height: 50px;
        }

        h2 {
            font-size: 1.5rem; 
            padding-top: 50px;
        }

        h3 {
            font-size: 1.17rem;
        }
    }
</style>
