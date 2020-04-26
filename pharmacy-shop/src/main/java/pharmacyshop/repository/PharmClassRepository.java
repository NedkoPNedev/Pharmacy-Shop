package pharmacyshop.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import pharmacyshop.entity.Medicine;
import pharmacyshop.entity.PharmClass;

import java.util.List;
import java.util.Set;

public interface PharmClassRepository extends CrudRepository<PharmClass, Long> {

    @Query(value = "select pharmclass.pharmQuestion from PharmClass pharmclass")
    Set<String> findAllPharmQuestions();

    @Query(value = "select medicines from PharmClass pharmclass inner join pharmclass.medicines medicines where pharmclass.pharmQuestion = :question")
    List<Medicine> findAllMedicinesForGivenClass(@Param("question") String pharmClassQuestionQuestion);
}
