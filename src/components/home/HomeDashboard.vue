<script setup>
import IconCopy from "@/assets/icons/icon-copy.svg";
import { UNTRUSTED_NODES_MOCK} from "@/utils/mocks/home-dasboard-example";
import { VIOLATIONS_ICONS } from "@/utils/violations-map";
import useCopyToClipboard from "@/use/useCopyToClipboard";

const { copyToClipboard } = useCopyToClipboard()

function percentToHSL(percent) {
  const hue = (percent / 100) * 120;
  return { 'color': `hsl(${hue}, 100%, 30%)` }
}

</script>

<template>
  <section class="home-dashboard">
    <el-table
      :data="UNTRUSTED_NODES_MOCK"
      :default-sort="{ prop: 'rank', order: 'descending' }"
      class="home-dashboard__table"
    >
      <el-table-column
        prop="rank"
        label="Rank"
        width="80"
        sortable
      />
      <el-table-column
        label="Trust score"
        prop="score"
        width="120"
        sortable
      >
        <template #default="{ row }">
          <span :style="percentToHSL(row.score)">
            {{ row.score }}%
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address"
      >
        <template #default="{ row }">
          <div class="home-dashboard__table-address">
            <div class="home-dashboard__table-address-text">
              {{ row.address }}
            </div>
            <IconCopy
              class="home-dashboard__table-address-copy"
              @click="copyToClipboard(row.address)"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Entity name"
        width="200"
      >
        <template #default="{ row }">
          <el-tag class="home-dashboard__table-entity">
            {{ row.name }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="blocks_created"
        label="Blocks created"
        width="150"
        sortable
      >
        <template #default="{ row }">
          {{ row.blocks_created }}%
        </template>
      </el-table-column>
      <el-table-column
        prop="rank"
        label="Violations"
        class="home-dashboard__table-violations"
      >
        <template #default="{ row }">
          <el-tag
            v-for="(violation, index) in row.violations"
            :key="index + violation"
            type="danger"
            class="home-dashboard__table-violation"
          >
            <component :is="VIOLATIONS_ICONS[violation]" />
            <div class="home-dashboard__table-violation-text">
              {{ violation }}
            </div>
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<style lang="scss">
.home-dashboard {
  padding: 4rem 0;

  .home-dashboard__table {
    border: 1px solid var(--color-border);
    border-radius: 12px;
    --el-table-header-bg-color: var(--color-background-mute);
    --el-table-text-color: var(--color-text);
    --el-table-header-text-color: var(--color-text);
    --el-table-border: 0;

    table {
      font-size: 0.8rem;
    }

    thead {
      .cell {
        font-weight: bold;
      }
    }

    .home-dashboard__table-address {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;

      .home-dashboard__table-address-text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .home-dashboard__table-address-copy {
        cursor: pointer;
        margin-left: 0.2rem;
      }
    }

    .home-dashboard__table-entity {
      color: var(--color-text);
      background: var(--color-background-mute);
      border: 0;
    }

    .home-dashboard__table-violations {
      display: flex;
      gap: 0.2rem;
    }

    .home-dashboard__table-violation {

      .home-dashboard__table-violation-text{
        display: inline-block;
        height: 100%;
      }

      & > .el-tag__content {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }

      &:not(:first-child) {
        @media (min-width: 1024px) {
          margin-left: 0.4rem;
        }
      }
    }
  }
}
</style>
