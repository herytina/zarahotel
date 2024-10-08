<template>
  <div>
    <div
      :class="[
        { 'col-md-4': vertical && !tabNavWrapperClasses },
        { 'col-12': centered && !tabNavWrapperClasses },
        tabNavWrapperClasses
      ]"
    >
      <ul
        class="nav"
        role="tablist"
        v-bind="$attrs"
        :class="[
          tabTypeClass,
          { 'nav-pills-icons': icons },
          { 'nav-pills': pills },
          { 'nav-tabs': !pills },
          { 'flex-column': vertical },
          { 'justify-content-center': centered },
          tabNavClasses
        ]"
      >
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="nav-item active"
          data-toggle="tab"
          role="tablist"
          aria-expanded="true"
        >
          <a
            data-toggle="tab"
            role="tablist"
            :href="`#${tab.id}`"
            :aria-expanded="tab.active"
            class="nav-link"
            :class="{ active: tab.active, disabled: tab.disabled }"
            @click.prevent="activateTab(tab)"
          >
            <tab-item-content :tab="tab" />
          </a>
        </li>
      </ul>
    </div>
    <div
      class="tab-content"
      :class="[
        { 'tab-space': !vertical && !noContentSpace },
        'text-left',
        { 'col-md-8': vertical && !tabContentClasses },
        tabContentClasses
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabS',
  components: {
    TabItemContent: {
      props: ['tab'],
      render(h) {
        return h('div', [this.tab.$slots.label || this.tab.label]);
      }
    }
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value => {
        let acceptedValues = [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'default',
          'neutral'
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    activeTab: {
      type: String,
      default: ''
    },
    tabNavWrapperClasses: {
      type: [String, Object],
      default: ''
    },
    tabNavClasses: {
      type: [String, Object],
      default: ''
    },
    tabContentClasses: {
      type: [String, Object],
      default: ''
    },
    vertical: Boolean,
    noContentSpace: Boolean,
    icons: Boolean,
    centered: Boolean,
    value: String,
    pills: Boolean
  },
  data() {
    return {
      tabs: []
    };
  },
  computed: {
    tabTypeClass() {
      let baseClass = this.pills ? 'pills' : 'tabs';
      if (this.type) {
        return `nav-${baseClass}-${this.type}`;
      }
      return '';
    }
  },
  watch: {
    value(newVal) {
      this.findAndActivateTab(newVal);
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.value) {
        this.findAndActivateTab(this.value);
      }
    });
  },
  methods: {
    findAndActivateTab(label) {
      let tabToActivate = this.tabs.find(t => t.label === label);
      if (tabToActivate) {
        this.activateTab(tabToActivate);
      }
    },
    activateTab(tab) {
      if (tab.disabled) {
        return;
      }
      if (this.handleClick) {
        this.handleClick(tab);
      }
      this.deactivateTabs();
      tab.active = true;
      this.$emit('input', tab.label || tab.id);
    },
    deactivateTabs() {
      this.tabs.forEach(tab => {
        tab.active = false;
      });
    },
  }
};
</script>
