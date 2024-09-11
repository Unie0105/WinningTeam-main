<template>
  <div class="investment-guides-page">
    <div class="header-section">
      <h1>{{ $t('investment-guides.header-title') }}</h1>
      <p>{{ $t('investment-guides.header-description') }}</p>
    </div>

    <div class="content-section">
      <h2>{{ $t('investment-guides.intro-title') }}</h2>
      <div class="intro-section">
        <img src="/f32.jfif" alt="Investment Overview" class="intro-image" />
        <p>
          {{ $t('investment-guides.intro-description') }}
        </p>
      </div>
    </div>

    <div class="types-section">
      <h2>{{ $t('investment-guides.types-title') }}</h2>
      <select class="dropdown-list">
        <option>{{ $t('investment-guides.types-options.stocks') }}</option>
        <option>{{ $t('investment-guides.types-options.bonds') }}</option>
        <option>{{ $t('investment-guides.types-options.real-estate') }}</option>
      </select>
    </div>

    <div class="investment-examples">
      <div class="card">
        <h3>{{ $t('investment-guides.stock-card.title') }}</h3>
        <p>{{ $t('investment-guides.stock-card.description') }}</p>
        <img src="/f33.jfif" alt="Stock Market" class="card-image" />
      </div>
      <div class="card">
        <h3>{{ $t('investment-guides.bonds-card.title') }}</h3>
        <p>{{ $t('investment-guides.bonds-card.description') }}</p>
        <img src="/f34.jfif" alt="Bonds" class="card-image" />
      </div>
      <div class="card">
        <h3>{{ $t('investment-guides.real-estate-card.title') }}</h3>
        <p>{{ $t('investment-guides.real-estate-card.description') }}</p>
        <p>{{ $t('Real estate involves purchasing property to generate rental income or capital appreciation.') }}</p>
        <img src="/f35.jfif" alt="Real Estate" class="card-image" />
      </div>
    
    </div>

    <div class="cta-section">
      <p>{{ $t('investment-guides.cta-description') }}</p>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestmentGuides',
};
</script>

<style scoped>
.investment-guides-page {
  padding: 40px;
  background-color: #f5f5f5;
  color: #333;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.header-section h1 {
  font-size: 2.5rem;
  color: #004d00;
}

.header-section p {
  font-size: 1.25rem;
  color: #666;
}

.content-section {
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.intro-section {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.intro-image {
  width: 45%;
  border-radius: 8px;
}

.types-section {
  text-align: left;
  margin-bottom: 40px;
}

.dropdown-list {
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.investment-examples {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}

.card {
  background-color: white;
  padding: 15px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px; /* Add margin for spacing */
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #004d00;
}

.card p {
  font-size: 0.875rem;
  color: #666;
}

.card-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10px;
}

.cta-section {
  text-align: center;
  margin-top: 50px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #004d00;
  color: white;
  font-size: 1.25rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #003300;
}
</style>