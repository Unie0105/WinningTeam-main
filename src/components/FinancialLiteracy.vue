<template>
  <div class="financial-literacy-page">
    <div class="hero-section">
      <div class="hero-overlay">
        <h1 class="hero-title">{{ $t('hero.title') }}</h1>
        <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
        <a href="#learn-more" class="cta-button">{{ $t('cta.learnMore') }}</a>
      </div>
    </div>
    <div class="content-section">
      <h2>{{ $t('content.whyItMattersTitle') }}</h2>
      <p>{{ $t('content.whyItMattersText') }}</p>
      <img src="/f13.png" alt="Financial Literacy" class="feature-image">
      <h2>{{ $t('content.keyConceptsTitle') }}</h2>
      <ul>
        <li><strong>{{ $t('content.concepts.managingFinances') }}</strong> {{ $t('content.concepts.managingFinancesDesc') }}</li>
        <li><strong>{{ $t('content.concepts.creditAndDebt') }}</strong> {{ $t('content.concepts.creditAndDebtDesc') }}</li>
        <li><strong>{{ $t('content.concepts.investingGrowth') }}</strong> {{ $t('content.concepts.investingGrowthDesc') }}</li>
      </ul>
      <p>{{ $t('content.finalText') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialLiteracy',
};
</script>

<style scoped>
.financial-literacy-page {
  padding: 20px;
  color: #333;
  background-color: #f9f9f9;
}

.hero-section {
  position: relative;
  color: white;
  text-align: center;
  padding: 80px 20px;
  margin-bottom: 20px;
  background-color: #004d00;
}

.hero-overlay {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-top: 10px;
}

.cta-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #004d00;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #003300;
}

.content-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 1.75rem;
  margin-top: 20px;
}

ul {
  list-style: disc;
  padding-left: 20px;
  margin-top: 10px;
}

.feature-image {
  width: 100%;
  height: auto;
  margin: 20px 0;
}
</style>
