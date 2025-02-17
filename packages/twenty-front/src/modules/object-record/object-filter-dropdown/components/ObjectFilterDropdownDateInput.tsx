import { useFilterDropdown } from '@/object-record/object-filter-dropdown/hooks/useFilterDropdown';
import { InternalDatePicker } from '@/ui/input/components/internal/date/components/InternalDatePicker';
import { isNonNullable } from '~/utils/isNonNullable';

export const ObjectFilterDropdownDateInput = () => {
  const {
    filterDefinitionUsedInDropdown,
    selectedOperandInDropdown,
    setIsObjectFilterDropdownUnfolded,
    selectFilter,
  } = useFilterDropdown();

  const handleChange = (date: Date | null) => {
    if (!filterDefinitionUsedInDropdown || !selectedOperandInDropdown) return;

    selectFilter?.({
      fieldMetadataId: filterDefinitionUsedInDropdown.fieldMetadataId,
      value: isNonNullable(date) ? date.toISOString() : '',
      operand: selectedOperandInDropdown,
      displayValue: isNonNullable(date) ? date.toLocaleString() : '',
      definition: filterDefinitionUsedInDropdown,
    });

    setIsObjectFilterDropdownUnfolded(false);
  };

  return (
    <InternalDatePicker
      date={new Date()}
      onChange={handleChange}
      onMouseSelect={handleChange}
    />
  );
};
