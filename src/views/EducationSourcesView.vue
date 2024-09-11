<template>
  <div class="education-sources">
    <h1 style="font-size: 80px;color:black;">{{ $t('education.title') }}</h1>
    <br>
    <div class="card-container">
      <div class="card financial-literacy">
        <h2>{{ $t('education.financialLiteracyTitle') }}</h2>
        <p>
          {{ $t('education.financialLiteracyDesc') }}
        </p>
        <p>
          <router-link to="/financial-literacy" class="link">{{ $t('education.learnMore') }}</router-link>
        </p>
      </div>
      
      <div class="card budgeting">
        <h2>{{ $t('education.budgetingTitle') }}</h2>
        <p>
          {{ $t('education.budgetingDesc') }}
        </p>
        <p>
          <router-link to="/budgeting" class="link">{{ $t('education.learnMore') }}</router-link>
        </p>
      </div>
      
      <div class="card investment-guides">
        <h2>{{ $t('education.investmentGuidesTitle') }}</h2>
        <p>
          {{ $t('education.investmentGuidesDesc') }}
        </p>
        <p>
          <router-link to="/investment-guides" class="link">{{ $t('education.learnMore') }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationSources',
};
</script>

<style scoped>
/* Same styles as before */
.education-sources {
  padding: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  color: #333;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  width: 300px;
  box-sizing: border-box;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.card:hover {
  background-color: #f0f0f0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.financial-literacy:hover {
  background-color: #dff0d8;
}

.budgeting:hover {
  background-color: #f5f5f5;
}

.investment-guides:hover {
  background-color: #d6d6d6;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  margin-bottom: 10px;
}

.link {
  color: #0558af;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
