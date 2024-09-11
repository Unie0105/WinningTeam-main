<template>
  <div class="budgeting-page">
    <div class="hero-section">
      <h1 class="hero-title">{{ $t('hero.title') }}</h1>
      <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
    </div>
    <div class="content-section">
      <h2>{{ $t('content.whyBudgetingTitle') }}</h2>
      <p>{{ $t('content.whyBudgetingText') }}</p>
      <div class="cards-container">
        <div class="card">
          <img src="/f28.jfif" alt="Calculate Income" class="card-image">
          <div class="card-content">
            <h3>{{ $t('cards.calculateIncome.title') }}</h3>
            <p>{{ $t('cards.calculateIncome.description') }}</p>
          </div>
        </div>
        <div class="card">
          <img src="/f29.jpg" alt="List Expenses" class="card-image">
          <div class="card-content">
            <h3>{{ $t('cards.listExpenses.title') }}</h3>
            <p>{{ $t('cards.listExpenses.description') }}</p>
          </div>
        </div>
        <div class="card">
          <img src="/f30.jfif" alt="Set Goals" class="card-image">
          <div class="card-content">
            <h3>{{ $t('cards.setGoals.title') }}</h3>
            <p>{{ $t('cards.setGoals.description') }}</p>
          </div>
        </div>
        <div class="card">
          <img src="/f31.png" alt="Adjust Spending" class="card-image">
          <div class="card-content">
            <h3>{{ $t('cards.adjustSpending.title') }}</h3>
            <p>{{ $t('cards.adjustSpending.description') }}</p>
          </div>
        </div>
      </div><br><br>
      <p>{{ $t('content.finalText') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Budgeting',
};
</script>

<style scoped>
.budgeting-page {
  padding: 20px;
  color: #333;
  background-color: #f9f9f9;
}

.hero-section {
  color: white;
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 20px;
  background-color: rgb(4, 14, 4); /* Color background instead of image */
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-top: 10px;
}

.content-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 1.75rem;
  margin-top: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap; /* Allows cards to wrap if they overflow the container */
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 22%; /* Adjust width to fit multiple cards in a row */
  height: auto; /* Let the height adjust automatically based on content */
  text-align: center;
  flex: 1 1 auto; /* Allows card to grow and shrink as needed */
}

.card-image {
  width: 100%;
  height: 150px; /* Fixed height for images */
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  font-size: 1.25rem;
  margin: 10px 0;
}

.card-content p {
  font-size: 0.875rem;
  color: #666;
}
</style>
