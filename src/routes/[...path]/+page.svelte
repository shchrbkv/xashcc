<script>
   import Bars from '$lib/images/bars.png'
</script>

<img src="{Bars}" alt="Color Bars">
<div class="content">
   <h1>RENOVATION!</h1>
   <div class="blocks">
      <p>Due to unexpected regional restrictions, this web experience is being moved to a more reliable provider.</p>
      <p>Available at last on Monday, Feb 27.</p>
      <div class="links">
         <a href="/docs/motivation">Motivation ↗</a>
         <a href="/docs/CV-shcherbakov-aleksandr.pdf" data-sveltekit-reload>Curriculum Vitae ↗</a>
      </div>
   </div>
   <footer>Got questions? Try <a href="mailto:self@xash.cc">self@xash.cc</a></footer>
</div>

<style>
   img {
      width: 100%;
      height: 30vh;
      object-fit: cover;
      object-position: bottom;
   }
   .content {
      padding: 10%;
      font-size: 1.2rem;
      font-variation-settings: 'wght' 550;
      line-height: 1.5rem;
      max-width: 30rem;
      min-width: 18.5rem;
   }
   h1 {
      font-family: 'Right Grotesk Tight';
      font-variation-settings: 'wght' 550;
      font-size: 5.75rem;
      line-height: 4.5rem;
      margin-bottom: 3rem;
   }
   p {
      margin-bottom: 1.5rem;
   }

   .links {
      display: flex;
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: white solid thin;
   }

   .links a {
      margin-right: 1.5rem;
   }

   footer {
      margin-top: 1.5rem;
      font-size: 1rem;
      color: #8B8B86;
   }

   @media only screen and (max-width: 30em) {
      .links a {
         margin-right: 1rem;
      }
   }
</style>