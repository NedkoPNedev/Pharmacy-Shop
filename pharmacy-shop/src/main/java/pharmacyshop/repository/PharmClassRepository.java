package pharmacyshop.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import pharmacyshop.entity.PharmClass;

import java.util.Set;

public interface PharmClassRepository extends CrudRepository<PharmClass, Long> {

    @Query(value = "select pharmclass.pharmQuestion from PharmClass pharmclass")
    Set<String> findAllPharmQuestions();
}
