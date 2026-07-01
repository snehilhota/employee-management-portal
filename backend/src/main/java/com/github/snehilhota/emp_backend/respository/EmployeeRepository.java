package com.github.snehilhota.emp_backend.respository;

import com.github.snehilhota.emp_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
