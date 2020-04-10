<script>
  import Tailwind from "./Tailwind.svelte";

  import { p1Total, p2Total, p1Hand, p2Hand } from "./store";

  p1Total.useLocalStorage();
  p2Total.useLocalStorage();
  p1Hand.useLocalStorage();
  p2Hand.useLocalStorage();

  // let p1Total = 0;
  // let p2Total = 0;
  let p1HandScore = null;
  let p2HandScore = null;
  let p1ScoreInput;
  let p2ScoreInput;
  // let p1Hand = 0;
  // let p2Hand = 0;

  const handleAddP1Score = () => {
    $p1Total += p1HandScore;
    $p1Hand += 1;
    p1HandScore = "";
    p2ScoreInput.focus();
  };

  const handleAddP2Score = () => {
    $p2Total += p2HandScore;
    $p2Hand += 1;
    p2HandScore = "";
    p1ScoreInput.focus();
  };

  const reset = () => {
    $p1Total = 0;
    $p2Total = 0;
    $p1Hand = 0;
    $p2Hand = 0;
  };

  $: p1TotalScore = $p1Total;
  $: p2TotalScore = $p2Total;
</script>

<style>

</style>

<Tailwind />

<div class="bg-gray-800 h-screen pt-10 pb-10">
  <h1 class="text-white font-sans font-light text-center text-4xl mb-5">
    Play Rummy
  </h1>
  <div class="container w-full max-w-2xl mx-auto flex flex-row">
    <div class="flex-1 mx-3">
      <p
        class="font-sans font-light uppercase text-white text-center text-lg
        mb-3">
        Aiden
      </p>
      <form on:submit|preventDefault={handleAddP1Score}>
        <input
          bind:this={p1ScoreInput}
          bind:value={p1HandScore}
          type="number"
          placeholder="Aiden's Score"
          class="text-center text-xl w-full block bg-gray-900 text-white rounded
          p-3 font-sans font-thin" />
      </form>
      <p
        class="text-center font-sans font-light text-white opacity-75 my-3
        text-base">
        Hands Played: {p1Hand}
      </p>
      <div
        class="bg-gray-900 flex flex-col justify-center items-center rounded p-5">
        <p
          class="text-center font-sans font-light text-white text-lg opacity-25">
          Score
        </p>
        <p class="text-center font-sans font-bold text-white text-6xl">
          {p1TotalScore}
        </p>
      </div>
    </div>
    <div class="flex-1 mx-3">
      <p
        class="font-sans font-light uppercase text-white text-center text-lg
        mb-3">
        Dad
      </p>
      <form on:submit|preventDefault={handleAddP2Score}>
        <input
          bind:this={p2ScoreInput}
          bind:value={p2HandScore}
          type="number"
          placeholder="Dad's Score"
          class="text-center text-xl w-full block bg-gray-900 text-white rounded
          p-3 font-sans font-thin" />
      </form>
      <p
        class="text-center font-sans font-light text-white opacity-75 my-3
        text-base">
        Hands Played: {p2Hand}
      </p>
      <div
        class="bg-gray-900 flex flex-col justify-center items-center rounded p-5">
        <p
          class="text-center font-sans font-light text-white text-lg opacity-25">
          Score
        </p>
        <p class="text-center font-sans font-bold text-white text-6xl">
          {p2TotalScore}
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center mt-5">
    <a
      href="/"
      class="bg-black text-white text-base font-sans font-light px-8 py-3
      rounded"
      on:click|preventDefault={reset}>
      Reset
    </a>
  </div>
</div>
